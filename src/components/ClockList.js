import Clock from "./clock";

function ClockList({quantities = []}){
    return (<div>
        {quantities.map((key)=>           
            <Clock key = {key} local ="bn-BD"/>
        )}
    </div>

    );
}

export default ClockList;