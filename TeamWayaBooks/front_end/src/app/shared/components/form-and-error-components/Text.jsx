import { ErrorMessage } from 'formik';
import React from 'react';

/**
 * Composant générique permettant de gérer facilement les Input simple (text, text-area, number) en utilisant MDB et Formik
 *
 * @param {String} placeholder: label de l'input, qui sera affiché
 * @param {Boolean} errorRight: Permet de mettre le message d'erreur sur la droite (par défaut étant à gauche)
 *
 * @example <Field type="email" name="email" placeholder="Email" component={ InsyInput } className='my-0'/>
 * @author Peter Mollet
 */
const Text = ({
    errorRight,
    className,
    field: { name },
    field,
    form: { errors, touched },
    ...rest
}) => {
    return (
        <div className="relative">
            <textarea
                id={name}
                name={name}
                className={`input ${
                    errors[name] && touched[name] && 'input-error'
                } ${className} `}
                {...field}
                {...rest}
            />
            {errors[name] && touched[name] && (
                <ErrorMessage
                    name={field.name}
                    className={`z-50 text-xs text-red-500 absolute bottom-0 ${
                        errorRight ? 'right-2' : 'left-2'
                    }`}
                    component="small"
                />
            )}
        </div>
    );
};

export default Text;
