import React from 'react';

import contactView from './../assets/images/contactView.png';
import Contact from './../components/contact/Contact';

const ContactView = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 sm:mt-4">
            <div className="w-full flex flex-row justify-center">
                <img className="w-40" src={contactView} alt="contactView" />
            </div>
            <p className="text-PrimaryWaya-light font-semibold my-2">
                Vous ne trouvez pas la réponse à votre question ?
            </p>
            <p className="text-PrimaryWaya-light font-semibold mb-2">
                Notre Service Relation Client est à votre disposition via ce formulaire de
                contact :
            </p>
            <Contact />
        </div>
    );
};

export default ContactView;
