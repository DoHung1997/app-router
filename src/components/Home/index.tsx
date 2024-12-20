import React, {Suspense} from 'react';
import ToolList from "@/components/Home/ToolList";
import Loading from "@/app/[locale]/(default-layout)/loading";

type PropsType = {}

const HomeContainer: React.FC<PropsType> = () => {
    return (
        <div className={`w-full`}>
            {/* Tool List */}
            <div className={`bg-secondary15 p-20`}>
                <Suspense fallback={<Loading/>}>
                    <ToolList/>
                </Suspense>
            </div>
        </div>
    );
};

export default HomeContainer;