import { Link } from "react-router-dom";

export default function Products(){
    return <>
    <div class="container-fluid">


<h1 class="h3 mb-2 text-gray-800">Tables</h1>

<Link to="/productscreate">Create Product</Link>
<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Products List</h6>
    </div>
    
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>Desktop</td>
                        <td>IT</td>
                        <td>$3000</td>
                        <td>
                            <Link to="/productsedit/1">Edit Product</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Laptop</td>
                        <td>IT</td>
                        <td>$3000</td>
                        <td>
                            <Link to="/productsedit/2">Edit Product</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Router</td>
                        <td>IT</td>
                        <td>$300</td>
                        <td>
                            <Link to="/productsedit/3">Edit Product</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Keyboard</td>
                        <td>IT</td>
                        <td>$30</td>
                        <td>
                            <Link to="/productsedit/4">Edit Product</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>USB</td>
                        <td>IT</td>
                        <td>$10</td>
                        <td>
                            <Link to="/productsedit/5">Edit Product</Link>
                        </td>
                    </tr>
                  </tbody>
            </table>
        </div>
    </div>
</div>

</div>
    </>
}