import Card from "./card";
import Progress from "./progress";


export default function Dashboard(){
    let CardData = [
        {
            Earnings:'Earnings(Monthly)',
            Value:'$40000',
            icon:'fa-calendar',
            progressbar:false
        },
        {
            Earnings:'Earnings(Annual)',
            Value:'$215000',
            icon:'fa-dollar-sign',
            progressbar:false
        },
        {
            Earnings:'Tasks',
            Value:'50%',
            icon:'fa-clipboard-list',
            progressbar:true
        },
        {
            Earnings:'Pending Requests',
            Value:'18',
            icon:'fa-comments',
            progressbar:false
        }
       
    ];

    let progressData = [
        {
            name: 'Server Migration',
            value: '20',
            color: 'bg-danger'
        },
        {
            name: 'Sales Tracking',
            value: '40',
            color: 'bg-warning'
        },
        {
            name: 'Customer Database',
            value: '60',
            color: ''
        },
        {
            name: 'Payout Details',
            value: '80',
            color: 'bg-info'
        },
        {
            name: 'Account Setup',
            value: '100',
            color: 'bg-success'
        },
    ]


    return <>
     <div class="container-fluid">
     <div class="d-sm-flex align-items-center justify-content-between mb-4">
     <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
     <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
    </div>
    <div class="row">

    {
       CardData.map((obj)=>{
        return <Card data={obj}></Card>
       })
    }
   
    </div>
    <div className="row">
             {/* Content Column */}
          <div className="col-lg-6 mb-4">
          {/* Project Card Example */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
        {
            progressData.map((obj)=>{
                return <Progress data={obj}></Progress>
            })
        
        }
        
        </div>
        </div>
        </div>
    </div>
    
    

   
    </>
}