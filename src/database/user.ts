import prisma from ".";

export async function UserByEmail(email: string) {
   return await prisma.user.findFirst({
      where: {
         email,
      },
   });
}
