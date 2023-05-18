import SearchAndFilter from "../../components/SearchAndFilter";
import Table from "../../components/Table";
import React from "react";
import Slide_bar from "../../components/Slider_bar";

function GarageOwner_page() {
    return (
        <div className="GarageOwner_page" >


            <Slide_bar>
                <div style={{ backgroundColor: "#fff", padding: 16, borderRadius: 12 }}>
                    {/* <SearchAndFilter></SearchAndFilter> */}
                    <div style={{ padding: '30px' }}></div>
                    <Table></Table>
                </div>
            </Slide_bar>

        </div>
    );
}
export default GarageOwner_page;