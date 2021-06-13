import React from "react";

export default class TestComponent extends React.Component {
    constructor(props: any) {
        super(props);
    }

   btnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
       console.log('this', this);
   }

    render(): React.ReactNode {
        return (
            <div>
                <button onClick={this.btnClick}>test</button>
            </div>
        );
    }

}