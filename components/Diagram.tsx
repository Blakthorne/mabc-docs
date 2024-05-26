import Image from "next/image"
import { useTheme } from "nextra-theme-docs";

export default function Diagram({ altText, imageName }) {
    
    const { resolvedTheme } = useTheme();

    if (resolvedTheme === 'dark') {
        imageName = "/diagrams/" + imageName + "_dark.png";
    }
    else {
        imageName = "/diagrams/" + imageName + "_light.png";
    }

    return (
        <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "36px",
                marginBottom: "24px",
                marginLeft: "16px",
                marginRight: "16px"
        }}>
            <Image
                src={imageName}
                alt={altText}
                width={700}
                height={700}
            />
        </div>
    )
}