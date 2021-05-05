export default function Progressbar(props){
    return <>
                                                <div class="col">
                                                <div className="progress progress-sm mr-2">
                                                <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                               </div>
                                                </div>
    
    </>
}