'use client';

import { PhotoIcon } from '@heroicons/react/24/outline';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useFormContext, useWatch } from 'react-hook-form';

declare global {
  var cloudinary: any;
}

const uploadPreset = 'dyanhllp';

const ImageUpload = () => {
  const { setValue } = useFormContext();
  const value = useWatch({ name: 'imageSrc' });
  const handleUpload = (result: any) => {
    setValue('imageSrc', result.info.secure_url);
  };

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => {
              // Override style of radix UI, otherwise we cannot click to select image
              document.body.style.pointerEvents = 'initial';
              open?.();
            }}
            className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed
              border-2
              p-20
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
            "
          >
            <PhotoIcon className="h-6 w-6 text-gray-500" />
            <div className="font-semibold text-lg">Click to upload</div>
            {value && (
              <div
                className="
              absolute inset-0 w-full h-full"
              >
                <Image
                  fill
                  style={{ objectFit: 'cover' }}
                  src={value}
                  alt="House"
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
