import { IIcon } from "../interfaces";

const LogoWithText = ({ size, color }: IIcon) => {
  return (
    <svg
      width={size || "1rem"}
      height={size || "1rem"}
      color={color || "#000"}
      viewBox="0 0 260 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.702 58.27c2.04 3.059 4.77 5.572 8.012 7.283l-8.012 8.012-8.012-8.012a21.7 21.7 0 008.012-7.283zm18.21-17.481a7.284 7.284 0 100 14.567 7.284 7.284 0 000-14.567zm-36.42 0a7.284 7.284 0 100 14.567 7.284 7.284 0 000-14.567zm36.42-9.105a14.567 14.567 0 110 29.135 14.567 14.567 0 010-29.135zm-36.42 0a14.567 14.567 0 11.001 29.135 14.567 14.567 0 010-29.135zm0-14.567c6.41 13.474-15.55 10.051-19.847 20.03-1.311 2.913-2.003 5.936-2.003 9.104a21.851 21.851 0 0021.85 21.852c.766-.037 1.53-.073 2.295-.183l10.78 10.78 5.135 5.062 5.135-5.062 10.78-10.78c.765.11 1.53.146 2.294.183A21.851 21.851 0 0083.762 46.25c0-3.168-.692-6.19-2.003-9.104-4.297-9.979-21.107-5.609-14.697-19.083-9.615 7.502-9.958 9.286-22.194 9.323-12.237-.037-9.76-2.768-19.375-10.27z"
        fill="#0007AE"
      />
      <path
        d="M113.146 35.733V36.8c0 1.565-.208 2.973-.626 4.225-.417 1.242-1.01 2.3-1.778 3.172a7.758 7.758 0 01-2.745 2.006c-1.063.465-2.243.697-3.543.697-1.28 0-2.456-.232-3.528-.697a7.9 7.9 0 01-2.76-2.006c-.777-.872-1.38-1.93-1.806-3.172-.427-1.252-.64-2.66-.64-4.225v-1.067c0-1.575.213-2.983.64-4.225.427-1.243 1.024-2.3 1.792-3.173a7.683 7.683 0 012.746-2.02c1.072-.464 2.248-.697 3.528-.697 1.299 0 2.48.233 3.542.697a7.686 7.686 0 012.746 2.02c.777.873 1.375 1.93 1.792 3.173.427 1.242.64 2.65.64 4.225zm-3.954 1.067v-1.096c0-1.128-.105-2.12-.313-2.973-.209-.863-.517-1.588-.925-2.176a3.944 3.944 0 00-1.508-1.323c-.598-.304-1.271-.456-2.02-.456-.759 0-1.432.152-2.02.456-.579.294-1.072.735-1.48 1.323-.408.588-.72 1.313-.939 2.176-.208.854-.313 1.845-.313 2.973V36.8c0 1.119.105 2.11.313 2.973.219.863.531 1.593.939 2.19.418.589.92 1.035 1.508 1.338.588.304 1.262.455 2.02.455.759 0 1.432-.151 2.02-.455a3.98 3.98 0 001.48-1.337c.408-.598.716-1.328.925-2.191.208-.863.313-1.854.313-2.973zM121.554 42.647l4.125-16.744h2.234l.142 3.528-4.41 17.185h-2.361l.27-3.97zm-2.603-16.744l3.385 16.687v4.026h-2.575l-4.694-20.713h3.884zm13.386 16.616l3.329-16.616h3.898l-4.695 20.713h-2.574l.042-4.097zm-3.357-16.616l4.125 16.8.242 3.913h-2.361l-4.396-17.2.171-3.513h2.219zM155.184 43.543v3.073h-10.413v-3.073h10.413zm-9.233-17.64v20.713h-3.912V25.903h3.912zM157.802 25.903h7.525c1.575 0 2.926.237 4.055.711 1.128.474 1.996 1.176 2.603 2.105.607.93.91 2.073.91 3.429 0 1.072-.189 2.001-.569 2.788a5.427 5.427 0 01-1.607 1.978c-.683.53-1.489.948-2.419 1.252l-1.223.626h-6.644l-.028-3.088h4.965c.806 0 1.475-.142 2.006-.426a2.819 2.819 0 001.195-1.181c.275-.503.412-1.077.412-1.721 0-.693-.133-1.29-.398-1.793a2.704 2.704 0 00-1.209-1.18c-.541-.276-1.224-.413-2.049-.413h-3.613v17.626h-3.912V25.903zm11.693 20.713l-4.794-9.276 4.14-.014 4.851 9.09v.2h-4.197zM184.561 29.047l-5.904 17.569h-4.14l7.739-20.713h2.646l-.341 3.144zm4.936 17.569l-5.932-17.57-.356-3.143h2.66l7.782 20.713h-4.154zm-.27-7.697v3.088h-11.111V38.92h11.111zM212.429 25.903v20.713h-3.926l-8.806-14.368v14.368h-3.912V25.903h3.912l8.834 14.382V25.903h3.898zM232.573 35.904v8.066c-.303.389-.782.81-1.437 1.266-.645.455-1.489.849-2.532 1.18-1.043.323-2.323.484-3.841.484-1.318 0-2.523-.218-3.613-.654a7.79 7.79 0 01-2.817-1.95c-.787-.853-1.394-1.896-1.821-3.129-.427-1.233-.64-2.641-.64-4.225v-1.366c0-1.583.199-2.992.597-4.225.408-1.233.987-2.276 1.736-3.13a7.508 7.508 0 012.717-1.948c1.062-.446 2.248-.669 3.557-.669 1.754 0 3.196.29 4.324.868 1.138.578 2.011 1.375 2.618 2.39.607 1.005.986 2.162 1.138 3.47h-3.813c-.104-.72-.313-1.35-.626-1.891a3.217 3.217 0 00-1.337-1.28c-.569-.314-1.309-.47-2.219-.47-.768 0-1.446.152-2.034.455a4.03 4.03 0 00-1.48 1.323c-.398.579-.702 1.295-.91 2.148-.199.854-.299 1.83-.299 2.93v1.395c0 1.11.114 2.096.341 2.96.228.853.555 1.573.982 2.161a4.32 4.32 0 001.608 1.323c.644.294 1.375.441 2.19.441.74 0 1.352-.061 1.835-.184.494-.133.887-.29 1.181-.47.294-.18.522-.356.683-.526v-3.884h-4.111v-2.86h8.023zM250 43.543v3.073h-11.011v-3.073H250zm-9.816-17.64v20.713h-3.912V25.903h3.912zm8.379 8.55v3.001h-9.574v-3.002h9.574zm1.394-8.55v3.087h-10.968v-3.087h10.968zM113.018 56.786v20.713h-3.926l-8.806-14.369V77.5h-3.912V56.786h3.912l8.834 14.382V56.786h3.898zM133.774 66.616v1.067c0 1.564-.209 2.973-.626 4.225-.417 1.242-1.01 2.3-1.778 3.172a7.762 7.762 0 01-2.746 2.006c-1.062.465-2.243.697-3.542.697-1.28 0-2.456-.232-3.528-.697a7.903 7.903 0 01-2.76-2.006c-.778-.872-1.38-1.93-1.807-3.172-.426-1.252-.64-2.66-.64-4.225v-1.067c0-1.575.214-2.983.64-4.225.427-1.243 1.025-2.3 1.793-3.173a7.682 7.682 0 012.745-2.02c1.072-.465 2.248-.697 3.529-.697 1.299 0 2.48.232 3.542.697a7.682 7.682 0 012.745 2.02c.778.873 1.376 1.93 1.793 3.173.427 1.242.64 2.65.64 4.225zm-3.955 1.067v-1.096c0-1.128-.104-2.12-.313-2.973-.208-.863-.517-1.588-.924-2.176a3.946 3.946 0 00-1.508-1.324c-.598-.303-1.271-.455-2.02-.455-.759 0-1.433.152-2.021.455-.578.294-1.071.736-1.479 1.324-.408.587-.721 1.313-.939 2.176-.209.854-.313 1.845-.313 2.973v1.096c0 1.119.104 2.11.313 2.973.218.863.531 1.593.939 2.19.417.589.92 1.034 1.508 1.338.588.303 1.261.455 2.02.455.759 0 1.432-.152 2.02-.455a3.988 3.988 0 001.48-1.337c.407-.598.716-1.328.924-2.191.209-.863.313-1.854.313-2.973zM145.155 56.786v20.713h-3.898V56.786h3.898zm6.43 0v3.087h-16.687v-3.087h16.687zM167.916 74.426v3.073h-11.011v-3.073h11.011zm-9.816-17.64v20.713h-3.912V56.786h3.912zm8.379 8.55v3.001h-9.574v-3.002h9.574zm1.395-8.55v3.087h-10.969v-3.087h10.969zM181.474 72.121c0-.398-.062-.754-.185-1.067-.114-.322-.328-.612-.64-.868-.304-.265-.735-.521-1.295-.768-.55-.256-1.261-.521-2.134-.796a23.66 23.66 0 01-2.703-1.025 10.65 10.65 0 01-2.205-1.323 5.638 5.638 0 01-1.465-1.735c-.351-.664-.527-1.432-.527-2.305 0-.853.181-1.631.541-2.333a5.364 5.364 0 011.565-1.807c.673-.512 1.465-.905 2.376-1.18.92-.275 1.934-.413 3.044-.413 1.536 0 2.864.28 3.983.84 1.129.559 2.001 1.318 2.618 2.276.616.957.925 2.034.925 3.229h-3.898c0-.645-.138-1.214-.413-1.707-.265-.494-.673-.882-1.223-1.167-.541-.284-1.224-.427-2.049-.427-.797 0-1.46.119-1.992.356-.521.237-.915.56-1.18.967a2.516 2.516 0 00-.384 1.366c0 .38.09.72.27 1.024.18.294.45.574.811.84.36.256.806.498 1.337.725.541.218 1.167.437 1.878.655 1.138.341 2.134.72 2.987 1.138.863.417 1.579.891 2.148 1.422a5.214 5.214 0 011.295 1.793c.294.664.441 1.418.441 2.262 0 .891-.175 1.688-.526 2.39a5.062 5.062 0 01-1.508 1.792c-.655.493-1.442.868-2.362 1.124-.91.256-1.93.384-3.058.384-1.006 0-2.002-.133-2.988-.398a9.088 9.088 0 01-2.66-1.224 6.236 6.236 0 01-1.906-2.077c-.475-.844-.712-1.83-.712-2.959h3.927c0 .655.104 1.214.313 1.679.218.455.521.83.91 1.124.398.284.863.493 1.394.626.531.133 1.105.199 1.722.199.796 0 1.451-.11 1.963-.327.521-.228.91-.54 1.166-.94.266-.398.399-.853.399-1.365z"
        fill="#161515"
      />
    </svg>
  );
};

export { LogoWithText };