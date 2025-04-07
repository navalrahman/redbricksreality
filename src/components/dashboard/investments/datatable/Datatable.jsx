
import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./Datatable.css"; 

import image from '../../../../images/image_one.jpeg'

const Datatable = () => {
    const formatCurrency = (value) => {
        return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    const actionBodyTemplate = () => {
        return <div className="flex-box">
            <button className="action-button">V</button>
            <button className="action-button">E</button>
            <button className="action-button">D</button>
        </div>;
    };

    const products = [
        {
            id: "1001",
            name: "Apple",
            description: "Product Description",
            image: "bamboo-watch.jpg",
            profiles:"EPF",
            funddate:"March 31, 2022",
            commitment: "2,50,000",
            funded: "3,25,000",
            distribution: 10000,
            em: 0.04,
        },
        {
            id: "1001",
            name: "Apple",
            description: "Product Description",
            image: "bamboo-watch.jpg",
            profiles:"EPF",
            funddate:"March 31, 2022",
            commitment: "2,50,000",
            funded: "3,25,000",
            distribution: 10000,
            em: 0.04,
        },
        {
            id: "1001",
            name: "Apple",
            description: "Product Description",
            image: "bamboo-watch.jpg",
            profiles:"EPF",
            funddate:"March 31, 2022",
            commitment: "2,50,000",
            funded: "3,25,000",
            distribution: 10000,
            em: 0.04,
        },
    ];

    return (
        <div className="card">
            <DataTable value={products} sortField="price" sortOrder={-1} className="custom-table">
                <Column
                    field="image"
                    header="Offerings"
                    body={(product) => (
                        <div>
                            <img src={image} alt={product.name} className="product-image" /><p>{product.name}</p>
                        </div>
                    )}
                    sortable
                ></Column>
                <Column field="profiles" header="Profiles" sortable></Column>
                <Column field="funddate" header="Fund Date" ></Column>
                <Column field="commitment" header="Commitment" sortable></Column>
                <Column field="funded" header="Funded" sortable></Column>
                <Column field="distribution" header="Distribution" sortable></Column>
                <Column field="em" header="EM" sortable></Column>
                <Column body={actionBodyTemplate} header="Action" sortable></Column>
            </DataTable>
        </div>
    );
};

export default Datatable;
