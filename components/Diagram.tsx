import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "nextra-theme-docs";

/**
 * Render a formatted diagram given the source file and alt text to display
 * 
 * @param alText - the alt text
 * @param imageName - the base name of the diagram (wihout leading slash, extension, or theme designation)
 */
export default function Diagram({ altText, imageName, label }) {
    
    // Get whether theme is `light` or `dark`
    const { resolvedTheme } = useTheme();

    // Create state for the name of the image
    const [image, setImage] = useState<string>("");

    // Whenever the theme changes, switch the corresponding file with `_light` or `_dark` in the name
    useEffect(() => {
        setImage("/diagrams/" + imageName + "_"  + resolvedTheme + ".png");
    }, [resolvedTheme]);

    return (
        <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "36px",
                marginBottom: "24px",
                marginLeft: "16px",
                marginRight: "16px"
        }}>
            <div>
                {image !== "" ?
                    <Image
                        src={image}
                        alt={altText}
                        width={700}
                        height={700}
                    /> : null
                }
                <div style={{
                    textAlign: "center",
                    marginTop: "8px"
                }}>{label}</div>
            </div>
        </div>
    )
}