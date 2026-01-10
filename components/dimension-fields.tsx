"use client"

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { UseFormReturn } from "react-hook-form"

interface DimensionFieldsProps {
    form: UseFormReturn<any>
    showHeight?: boolean
    showAnchorage?: boolean
}

export function DimensionFields({ form, showHeight = false, showAnchorage = false }: DimensionFieldsProps) {
    return (
        <div className="grid grid-cols-2 gap-4">
            <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Largo (m)</FormLabel>
                        <FormControl>
                            <Input type="number" step="0.01" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="width"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Ancho (m)</FormLabel>
                        <FormControl>
                            <Input type="number" step="0.01" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {showHeight && (
                <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Alto/Prof. (m)</FormLabel>
                            <FormControl>
                                <Input type="number" step="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            )}

            {showAnchorage && (
                <FormField
                    control={form.control}
                    name="anchorage"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Anclajes (m)</FormLabel>
                            <FormControl>
                                <Input type="number" step="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            )}

            <FormField
                control={form.control}
                name="slope"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Talud (m)</FormLabel>
                        <FormControl>
                            <Input type="number" step="0.01" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="squareMeters"
                render={({ field }) => (
                    <FormItem className={showHeight || showAnchorage ? "col-span-1" : "col-span-2"}>
                        <FormLabel>Total m²</FormLabel>
                        <FormControl>
                            {/* Allow manual input but could be calculated */}
                            <Input type="number" step="0.01" placeholder="Ej: 500" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    )
}
