// "use client";

import Image from 'next/image';
import getBase64 from '@/actions/get-base64';


interface DynamicImageProps {
    imgUrl: string;
    title: string;
};

const DynamicImage: React.FC<DynamicImageProps> = async ({ imgUrl, title }) => {


    const myBlurDataUrl = await getBase64(imgUrl)

    return (
        <Image
            fill
            src={imgUrl}
            alt={title}
            placeholder='blur'
            blurDataURL={myBlurDataUrl}
            priority
            className="object-cover aspect-square rounded-md py-10"
        />
    )
};

export default DynamicImage;
