import { useWindowSize } from "@/hooks/use_window_size";

type Props = {
  text: string;
  colorIn: string;
  shadow: string;
  onPress: any;
};

const ButtonLight = ({ text, colorIn, shadow, onPress }: Props) => {
  const size = useWindowSize();
  const widthMin_500: boolean = (size?.width ?? 0) < 500;

  return (
    <div>
      <button
        onClick={onPress}
        style={{
          fontSize: 16,
          marginLeft: widthMin_500 ? 0 : 30,
          marginTop: widthMin_500 ? 20 : 40,
          fontWeight: "bold",
          width: widthMin_500 ? "100%" : 200,
          padding: "10px 20px",
          backgroundColor: colorIn,
          color: "#313552",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          boxShadow: shadow,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonLight;
