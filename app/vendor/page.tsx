import { checkRole } from '@/utils/auth'; // Adjusted the path to use an alias or correct location
import { redirect } from 'next/navigation';
import { clerkClient } from '@clerk/clerk-sdk-node'; // Import clerkClient from the Clerk SDK

export default async function vendorDashboard(params: {
  searchParams: Promise<{ search?: string }>            
}) {
  if (!checkRole('vendor')) {
    // If the user does not have the 'alumni' role, redirect them to the home page              
    redirect('/')
  }


    const query = (await params.searchParams).search

        const client = clerkClient;
    
    }