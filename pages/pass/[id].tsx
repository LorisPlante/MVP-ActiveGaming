// pages/pass/[id].tsx

import { useRouter } from 'next/router';
import PassDetails from '@/components/PassDetails';

const PassDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col items-center bg-[#1C1C1C]">
      <h1 className="text-white text-center font-space-grotesk text-2xl font-semibold mb-6">
        Pass Detail Page for ID: {id}
      </h1>
      {id && <PassDetails selectedId={id as string} />}
    </div>
  );
};

export default PassDetailPage;
