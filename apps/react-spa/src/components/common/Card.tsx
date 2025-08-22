import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  imageUrl?: string;
  imageAlt?: string;
  fallbackIcon?: string;
}

export default function Card({
  children,
  className = "",
  imageUrl,
  imageAlt = "",
  fallbackIcon = "📦",
}: CardProps) {
  return (
    <div className={`card ${className}`}>
      {(imageUrl || fallbackIcon) && (
        <div className="bg-gray-100 flex items-center justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full rounded-t object-cover"
              style={{ height: "200px" }}
            />
          ) : (
            <span className="text-6xl">{fallbackIcon}</span>
          )}
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  );
}
