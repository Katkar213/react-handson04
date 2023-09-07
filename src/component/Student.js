function Student(){
    return(
        <>
        <div id="title">
            <h1 style={{fontSize:"40px"}}>Student Detail</h1>
            <button>Add New Student</button>
        </div>
        <table border="2">
            <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td>Jhon</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td><a href="">Edit</a></td>
                </tr>
                <tr>
                    <td>Ketan</td>
                    <td>25</td>
                    <td>MERN</td>
                    <td>November</td>
                    <td><a href="#">Edit</a></td>
                </tr>
                <tr>
                    <td>Ram</td>
                    <td>26</td>
                    <td>MERN</td>
                    <td>Deceber</td>
                    <td><a href="#">Edit</a></td>
                </tr>
                <tr>
                    <td>Kunal</td>
                    <td>27</td>
                    <td>MERN</td>
                    <td>January</td>
                    <td><a href="#">Edit</a></td>
                </tr>
                <tr>
                    <td>Jay</td>
                    <td>28</td>
                    <td>MERN</td>
                    <td>February</td>
                    <td><a href="#">Edit</a></td>
                </tr>
                <tr>
                    <td>Jolly</td>
                    <td>29</td>
                    <td>MERN</td>
                    <td>March</td>
                    <td><a href="#">Edit</a></td>
                </tr>

            </tbody>
        </table>
        </>
    )
}
export default Student