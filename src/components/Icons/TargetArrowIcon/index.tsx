import { IIcon } from "../interfaces";

const TargetArrowIcon = ({ size, color }: IIcon) => {
  return (
    <svg
      width={size || "1rem"}
      height={size || "1rem"}
      color={color || "#000"}
      viewBox="0 0 79 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.164 5.503a2.603 2.603 0 011.609 2.405V20.92h13.014a2.603 2.603 0 011.842 4.446l-10.41 10.41a2.603 2.603 0 01-1.843.76h-14.54l-3.852 3.858a5.21 5.21 0 01-8.714 5.03 5.206 5.206 0 01-1.525-3.682l.005-.24a5.205 5.205 0 016.549-4.788l3.857-3.858V18.32a2.603 2.603 0 01.76-1.843L53.327 6.065a2.603 2.603 0 012.837-.562zm3.134 25.83l5.205-5.206H55.17a2.603 2.603 0 01-2.603-2.603v-9.333l-5.205 5.205v11.936h11.936zm8.6 6.121a31.232 31.232 0 11-26.663-26.652l-1.994 1.994a7.809 7.809 0 00-1.843 2.925l-.447-.005a26.027 26.027 0 1026.027 25.58 7.809 7.809 0 002.915-1.838l2-2.004h.004zM36.95 23.524a18.22 18.22 0 1018.219 18.22h-5.206A13.014 13.014 0 1136.952 28.73v-5.206z"
        fill="currentColor"
      />
    </svg>
  );
};

export { TargetArrowIcon };
