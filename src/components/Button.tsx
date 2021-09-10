interface ButtonProps {
  children: any;
  color?: 'light-color' | 'primary-color';
  textColor?: 'light-color' | 'primary-color-hover' | 'primary-color';
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const color = props.color ?? 'primary-color';
  const textColor = props.textColor ?? 'light-color';

  return(
      <button className={`
          bg-${color} rounded-lg h-8 w-44 text-lg font-semibold
          text-${textColor} hover:bg-${textColor} hover:text-${color}
      `} onClick={props.onClick} >
          {props.children}
      </button>
  );

}