'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface PDFViewerProps {
    url: string;
}

export default function PDFViewer({ url }: PDFViewerProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [numPages, setNumPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState(true);
    const [pdfDoc, setPdfDoc] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPDF = async () => {
            try {
                setLoading(true);
                // Load the PDF.js script dynamically
                const pdfjsLib = window.pdfjsLib;
                if (!pdfjsLib) {
                    throw new Error('PDF.js library not loaded');
                }

                // Load the PDF document
                const doc = await pdfjsLib.getDocument(url).promise;
                setPdfDoc(doc);
                setNumPages(doc.numPages);
                setLoading(false);
            } catch (err) {
                setError('Failed to load PDF');
                setLoading(false);
            }
        };

        loadPDF();
    }, [url]);

    useEffect(() => {
        const renderPage = async () => {
            if (!pdfDoc || !canvasRef.current) return;

            try {
                const page = await pdfDoc.getPage(currentPage);
                const canvas = canvasRef.current;
                const context = canvas.getContext('2d');

                const viewport = page.getViewport({ scale: 1.5 });
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                await page.render({
                    canvasContext: context,
                    viewport: viewport
                }).promise;
            } catch (err) {
                setError('Failed to render page');
            }
        };

        renderPage();
    }, [pdfDoc, currentPage]);

    const changePage = (offset: number) => {
        setCurrentPage(prev => {
            const newPage = prev + offset;
            return Math.min(Math.max(1, newPage), numPages);
        });
    };

    if (error) {
        return (
            <div className="w-full h-[800px] flex items-center justify-center bg-red-50 text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div className="bg-white p-4">
            {loading ? (
                <div className="w-full h-[800px] bg-gray-100 rounded-xl animate-pulse" />
            ) : (
                <>
                    <div className="overflow-auto">
                        <canvas
                            ref={canvasRef}
                            className="mx-auto"
                        />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <button
                            onClick={() => changePage(-1)}
                            disabled={currentPage <= 1}
                            className="flex items-center gap-2 px-4 py-2 text-gray-600 disabled:text-gray-400"
                        >
                            <ChevronLeftIcon className="w-5 h-5" />
                            Previous
                        </button>

                        <p className="text-gray-600">
                            Page {currentPage} of {numPages}
                        </p>

                        <button
                            onClick={() => changePage(1)}
                            disabled={currentPage >= numPages}
                            className="flex items-center gap-2 px-4 py-2 text-gray-600 disabled:text-gray-400"
                        >
                            Next
                            <ChevronRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
} 