interface ButtonProps {
    children: any;
    color?: "light-color" | "primary-color" | "secondary-color";
    textColor?: "light-color" | "secondary-color" | "primary-color";
    width?: number;
    height?: number;
    animate?: boolean;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    const color = props.color ?? "primary-color";
    const textColor = props.textColor ?? "light-color";
    const width = props.width ?? 44;
    const height = props.height ?? 8;
    const animate = props.animate ?? false;

    return (
        <button className={`
          bg-${color} rounded-lg h-${height} w-${width} text-xl font-medium shadow-md
          text-${textColor} hover:bg-${textColor} hover:text-${color} 
          animate-${animate ? "fade-in-fast" : "none"} 
        `} onClick={props.onClick} >
            {props.children}
        </button>
    );

}