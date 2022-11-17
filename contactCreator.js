import { LightningElement } from 'lwc';

// importando modulo ShowToast - Mensagem de Sucesso
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

//importando objetos do Salesforce
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';


export default class ContactCreator extends LightningElement {

// Definindo variaveis principais: o objeto e os campos obrigatorios    
objectApiName = CONTACT_OBJECT;
fields = [ FIRSTNAME_FIELD, LASTNAME_FIELD, EMAIL_FIELD];

// criando o manipulador de evento
handleSuccess(event) {

    // mensagem de notificação de sucesso
    const toastEvent = new ShowToastEvent({
        title: "Contact created",
        message: "Record ID: " + event.detail.id,
        variant: "success"
    });

    // disparando a notificação
    this.dispatchEvent(toastEvent);
  }

}