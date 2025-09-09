"use client"
import Link from "next/link"

// header to all pages
export default function Header() {
    return (
        <div className=" text-3xl text-center p-6 bg-blue-700">
            <h1><Link href={"./"}>LiveLogBook</Link></h1>
        </div>
    )
}