import React from 'react'
import { Button } from '@/components/ui/button'

export default function ServiceCTA() {
    return (
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center px-6 py-4">
            <Button className="px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600" asChild>
                <a href="/consultation">Get a Free Consultation</a>
            </Button>
            <Button className="px-6 py-3 bg-foreground/5 text-muted-foreground rounded-xl hover:bg-foreground/10 border border-border" asChild>
                <a href="/case-studies">View Our Case Studies</a>
            </Button>
        </div>
    )
}
