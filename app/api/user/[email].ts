import prisma from "@/lib/prisma";

// PUT /api/user/:Id
export default async function handle(req: any, res: any) {
  const user: { email: string, password: string, firstName: string, lastName: string, theme: string } = req.body.email;
  const result = await prisma.user.update({
    where: { email: user.email },
    data: user,
  });
  res.json(result);
}