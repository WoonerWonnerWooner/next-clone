import Image from "next/image";
import avatarPlacehold from "@/assets/avatar-placeholder.png";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
    avatarUrl: string | null | undefined;
    size?: number;
    className?: string;
}

export default function UserAvatar({avatarUrl, size, className}: UserAvatarProps) {
    return (
        <Image
            src={avatarUrl || avatarPlacehold}
            alt="User avatart"
            width={size ?? 48}
            height={size ?? 48}
            className={cn("aspect-square h-fit flex-none rounded-full bg-secondary, object-cover", className)}
        />    
    )
}