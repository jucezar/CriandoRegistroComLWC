import { LightningElement } from 'lwc';

// importando modulo ShowToast - Mensagem de Sucesso
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

//importando objetos do Salesforce
import  CONTACT_OBJECT  from '@salesforce/schema/Contact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';


export default class ContactCreator extends LightningElement {

objectApiName = CONTACT_OBJECT;
fields = [ FIRSTNAME_FIELD, LASTNAME_FIELD, EMAIL_FIELD];

 handlesuccess() {

    const toastEvent = new ShowToastEvent({
        title: 'Contato Criado',
        message: 'ID do Registro: ' + event.detail.id,
        variant: 'success'
    });

    this.dispatchEvent(toastEvent);
 }

 



}