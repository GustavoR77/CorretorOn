import {Skeleton} from "primereact/skeleton";

export default function ImovelSkeleton(){
    return (
        <div className={'box flex flex-col mb-6 px-3'}>
            <div className={'h-full overflow-hidden flex flex-col'}>
                <div className={'md:grid md:grid-cols-12'}>
                    <div className={'md:col-span-8 px-5'}>
                        <Skeleton width="90%" height="20px" className={'mb-2'}/>
                        <Skeleton width="30%" height="20px" className={'mb-2'}/>
                        <Skeleton width="150px" height="15px" className={'mb-2'}/>
                        <Skeleton width="80%" height="10px" className={'mb-2'}/>
                        <div className={'flex'}>
                            <Skeleton width="100px" height="30px" className={'mb-2 mr-2'}/>
                            <Skeleton width="100px" height="30px" className={'mb-2 mr-2'}/>
                            <Skeleton width="100px" height="30px" className={'mb-2 mr-2'}/>
                        </div>

                        <div className={'flex'}>
                            <Skeleton width="100%" height="200px" className={'mb-2 mr-2'}/>
                            <Skeleton width="100%" height="200px" className={'mb-2 mr-2'}/>
                            <Skeleton width="100%" height="200px" className={'mb-2 mr-2'}/>
                        </div>

                        <div className={'flex'}>
                            <Skeleton width="100px" height="15px" className={'mb-2 mr-2'}/>
                            <Skeleton width="100px" height="15px" className={'mb-2 mr-2'}/>
                            <Skeleton width="100px" height="15px" className={'mb-2 mr-2'}/>
                            <Skeleton width="100px" height="15px" className={'mb-2 mr-2'}/>
                        </div>

                        <div className={''}>
                            <Skeleton width="100px" height="15px" className={'mb-2 mr-2'}/>
                            <Skeleton width="100%" height="15px" className={'mb-2 mr-2'}/>
                            <Skeleton width="80%" height="15px" className={'mb-2 mr-2'}/>
                            <Skeleton width="90%" height="15px" className={'mb-2 mr-2'}/>
                            <Skeleton width="30%" height="15px" className={'mb-2 mr-2'}/>
                            <Skeleton width="70%" height="15px" className={'mb-2 mr-2'}/>
                            <Skeleton width="100%" height="15px" className={'mb-2 mr-2'}/>
                        </div>


                    </div>
                    <div className={'md:col-span-4 px-5 relative'}>
                        <div className={'p-card p-3 bg-gray-50 rounded-md'}>
                            <Skeleton width="80px" height="15px" className={'mb-2'}/>
                            <div className={'flex justify-between'}>
                                <Skeleton width="70px" height="15px" className={'mb-2'}/>
                                <Skeleton width="100px" height="15px" className={'mb-2'}/>
                            </div>
                            <div className={'flex justify-between'}>
                                <Skeleton width="100px" height="15px" className={'mb-2'}/>
                                <Skeleton width="70px" height="15px" className={'mb-2'}/>
                            </div>
                            <div className={'flex justify-between'}>
                                <Skeleton width="60px" height="15px" className={'mb-2'}/>
                                <Skeleton width="80px" height="15px" className={'mb-2'}/>
                            </div>
                            <div className={'flex justify-between my-3 border-t border-b pt-5 pb-3'}>
                                <Skeleton width="60px" height="15px" className={'mb-2'}/>
                                <Skeleton width="80px" height="15px" className={'mb-2'}/>
                            </div>

                            <div className={'my-3'}>
                                <Skeleton width="100%" height="30px" className={'mb-2'}/>
                            </div>

                            <div className={'my-3 border-t pt-5'}>
                                <Skeleton width="100%" height="30px" className={'mb-2'}/>
                                <Skeleton width="100%" height="30px" className={'mb-2'}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}