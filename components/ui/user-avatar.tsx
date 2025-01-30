import Image from "next/image"
import { auth } from "../../auth"

export default async function UserAvatar() {
  const session = await auth()

  if (!session?.user?.image) return null

  return (
    <div>
      <p>{session.user.email}</p>
      <Image width={40} height={40} src={session.user.image} alt="User Avatar" />
    </div>
  )
}