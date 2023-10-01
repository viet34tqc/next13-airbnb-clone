import { db } from '@/lib/db';
import { authOptions } from '@/lib/nextAuth';
import { getServerSession } from 'next-auth/next';

export default async function getCurrentUser() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await db.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    return currentUser;
  } catch (error: any) {
    return null;
  }
}
