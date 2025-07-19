import React from 'react'
import { Button } from '@/components/ui/button'

export default function ServiceCTA() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center m-5">
            <Button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600" asChild>
                <a href="/consultation">Get a Free Consultation</a>
            </Button>
            <Button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200" asChild>
                <a href="/portfolio">View Our Portfolio</a>
            </Button>
        </div>
    )
}
