interface HeadingProps {
    title: string;
    description: string;
};

const Heading:React.FC<HeadingProps> = ({title,description}) => {
    return (
        <div>
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                    {description}
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    {title}
                </h2>
        </div>
    );
};

export default Heading;