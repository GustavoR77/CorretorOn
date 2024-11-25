import {Skeleton} from "primereact/skeleton";

export default function ImovelCardSkeleton(){
    return (
        <div className="flex flex-col p-5 h-full">
            <div className="container-items flex flex-col gap-3 h-full items-center justify-between justify-center p-5">
                <Skeleton height="200" className="h-24 rounded-lg bg-secondary"/>
                <div className="w-full px-2">
                    <div className="text-center py-2">
                        <Skeleton />
                    </div>
                    <div className="flex flex-row px-3 py-5 gap-10 justify-start w-full">
                        <Skeleton className={'mr-1'}/>
                        <Skeleton className={'mr-1'}/>
                        <Skeleton className={'mr-1'}/>
                    </div>
                    <Skeleton className={'mr-1 w-full'}/>
                </div>
            </div>
        </div>
    );
}