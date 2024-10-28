import React from "react";
import Header from "../layout/header"
import Footer from "../layout/footer"
import AddRandomContact from "./addRandomContact"
import RemoveAllContact from "./removeAllContact"
import AddContact from "./addContact";
import FavoriteContacts from "./favoriteContacts";
import GeneralContacts from "./generalContants";

class ContactIndex extends React.Component{

    constructor(props){
        super(props);
        this.state={
            contactList:[
                {
                    id: 1,
                    name: "Ben Parker",
                    phone: "667-667-777",
                    email: "ben@gmail.com",
                    isFavorite: false,
                },
                {
                    id: 2,
                    name: "Kathy Patrick",
                    phone: "123-222-777",
                    email: "kathy@gmail.com",
                    isFavorite: true,
                },
                {
                    id: 3,
                    name: "Paul Show",
                    phone: "999-222-111",
                    email: "paul@gmail.com",
                    isFavorite: true,
                },
            ],
            selectedContact: undefined,
            isUpdating: false,
        };
    }
    
    handleAddContact = (newContact) => {
        if (newContact.name==""){
            return {status: "failure", msg:"Please Enter a valid Name"};
        } else if (newContact.phone==""){
            return {status: "failure", msg:"Please Enter a valid Phone Number"};
        }

        const duplicateRecord = this.state.contactList.filter((x)=>{
            if(x.name==newContact.name && x.phone==newContact.phone){
                return true;
            }
        })

        if (duplicateRecord.length > 0){
            return {status: "failure", msg:"Duplicate Record"};
        } 
        else
        {
            const newFinalContact = {
                ...newContact,
                id: this.state.contactList[this.state.contactList.length - 1].id + 1,
                isFavorite: false,
            };
            this.setState((prevState) => {
                return{
                    contactList: prevState.contactList.concat([newFinalContact]),
                }
            });
            return{status: "success", msg:"Contact was added sucessfully"};
        }      
    };

    handleUpdateContact = (updatedContact) => {
        if (updatedContact.name==""){
            return {status: "failure", msg:"Please Enter a valid Name"};
        } else if (updatedContact.phone==""){
            return {status: "failure", msg:"Please Enter a valid Phone Number"};
        }
 
        this.setState((prevState) => {
            return{
                contactList: prevState.contactList.map((obj) => {
                    if (obj.id == updatedContact.id) {
                        return {
                            ...obj,
                            name: updatedContact.name,
                            email: updatedContact.email,
                            phoone: updatedContact.phone,
                        };
                    }
                    return obj;
                }),
                isUpdating: false,
                selectedContact: undefined,
            }
        });
        return{status: "success", msg:"Contact was updated sucessfully"};
            
    };


    handleToggleFavorites = (contact) => {
        this.setState((prevState) => {
            return {
                contactList: prevState.contactList.map((obj) => {
                    if (obj.id == contact.id) {
                        return { ...obj, isFavorite : !obj.isFavorite};
                    }
                    return obj;
                }),
            };
        });
    };

    handleDeleteContact = (contactId) => {
        this.setState((prevState) => {
            return {
                contactList: prevState.contactList.filter((obj) => {
                    return obj.id !== contactId;
                }),
            };
        });
    };

    handleAddRandomContact = (newContact) => {
        const newFinalContact = {
            ...newContact,
            id: this.state.contactList[this.state.contactList.length - 1].id + 1,
            isFavorite: false,
        }; 
        this.setState((prevState) => {
            return{
                contactList: prevState.contactList.concat([newFinalContact]),
            }
        });
    };

    handleRemoveAllContact = () => {
        this.setState((prevState) => {
            return {
                contactList: [],
            };
        });
    };

    handleUpdateClick = (contact) => {
        this.setState((prevState) => {
            return {
                selectedContact: contact,
                isUpdating: true,
            };
        });
    }

    handleCancelUpdateContact = () => {
        this.setState((prevState) => {
            return {
                selectedContact: undefined,
                isUpdating: false,
            };
        });
    }

    render(){
        return(
            <div>
                <Header />
                <div className="container" style={{minHeight:"85vh"}}>
                    <div className="row py-3">
                        <div className="row py-2">
                            <div className="col-4 offset-2 row">
                                <AddRandomContact 
                                handleAddRandomContact = {this.handleAddRandomContact}/>
                            </div>
                            <div className="col-4 offset-2 row">
                                <RemoveAllContact
                                handleRemoveAllContact ={this.handleRemoveAllContact}/>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col 8 offset-2 row">
                            <AddContact 
                                isUpdating={this.state.isUpdating}
                                selectedContact={this.state.selectedContact}
                                cancelUpdateContact={this.handleCancelUpdateContact}
                                handleUpdateContact={this.handleUpdateContact} 
                                handleAddContact={this.handleAddContact}/>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col 8 offset-2 row">
                            <FavoriteContacts 
                                contacts={this.state.contactList.filter(
                                (u) => u.isFavorite==true
                                )}
                                favoriteClick={this.handleToggleFavorites}
                                deleteContact={this.handleDeleteContact}
                                updateClick={this.handleUpdateClick}
                            />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col 8 offset-2 row">
                            <GeneralContacts 
                                contacts={this.state.contactList.filter(
                                    (u) => u.isFavorite==false
                                )}
                                favoriteClick={this.handleToggleFavorites}
                                deleteContact={this.handleDeleteContact}
                                updateClick={this.handleUpdateClick}
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ContactIndex