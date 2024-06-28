import { SignIn } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs'

const SignInPage = () => {
    return (
        <main className='w-full h-screen flex justify-center items-center'>
            <ClerkLoaded>
                <div className='flex flex-col items-center justify-center h-screen'>
                    <SignIn />
                </div>
            </ClerkLoaded>
            <ClerkLoading>
                <Loader2 className='h-20 w-20 animate-spin text-black ' />
            </ClerkLoading>
        </main>
    )
}

export default SignInPage
