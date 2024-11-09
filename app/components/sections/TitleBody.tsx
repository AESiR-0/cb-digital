interface ContentProps {
    title: string;
    body: string;
    color: string;
}

export default function TitleBody({ title, body, color }: ContentProps) {
    return (
        <div
            className={`bg-${color} m-0 tracking-wider w-screen px-5 md:px-[100px] lg:px-[207px] gap-4 md:gap-6 h-auto md:h-[50vh] font-clash items-center justify-center flex flex-col text-center py-10 md:py-0`}
        >
            <h1 className="font-bold uppercase text-3xl md:text-4xl lg:text-5xl">
                {title}
            </h1>
            <p className="font-light leading-tight text-lg md:text-2xl lg:text-3xl">
                {body}
            </p>
        </div>
    );
}
