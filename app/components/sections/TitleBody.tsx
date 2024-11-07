
interface content {
    title: string;
    body: string;
    color: string;
}

export default function TitleBody({ title, body, color }: content) {
    return (
        <div className={`bg-${color} m-0  tracking-wider w-screen px-[207px] gap-6 h-[50vh] font-clash items-center justify-center flex flex-col text-center`}>
            <h1 className="font-bold uppercase text-5xl">
                {title}
            </h1>
            <p className=" font-light leading-tight text-3xl">
                {body}
            </p>
        </div>
    )
}