import { ClerkLoaded, ClerkLoading, SignUp } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import React from 'react'

const SignUpPage = () => {
    return (
        <main className='w-full h-screen flex justify-center items-center'>
            <ClerkLoaded>
                <div className='flex flex-col items-center justify-center h-screen'>
                    <SignUp />
                </div>
            </ClerkLoaded>
            <ClerkLoading>
                <Loader2 />
            </ClerkLoading>
        </main>
    )
}

export default SignUpPage
