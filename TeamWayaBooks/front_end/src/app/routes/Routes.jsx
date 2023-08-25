import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PrivateRoute } from '../shared/components/utils-components/PrivateRoute';
import {
    ROLE_ADMIN,
    ROLE_COMMERCIAL,
    ROLE_USER,
} from '../shared/constants/rolesConstant';
import * as URL from '../shared/constants/urls/urlConstants';
import { customHistory } from '../shared/services/historyServices';
import AddressAddView from '../views/address/AddressAddView';
import AddressDeleteView from '../views/address/AddressDeleteView';
import AddressesView from '../views/address/AddressesView';
import AddressUpdateView from '../views/address/AddressUpdateView';
import AdminHomeView from '../views/AdminHomeView';
import AdvancedSearchView from '../views/AdvancedSearchView';
import HomeView from '../views/HomeView';
import ListProductsCategoriesView from '../views/product/ListProductsCategoriesView';
import ListProductsTagView from '../views/product/ListProductsTagView';
import DeleteProfileView from '../views/user/DeleteProfileView';
import LoginView from '../views/user/LoginView';
import ManageAccountView from '../views/user/ManageAccountView';
import RegisterView from '../views/user/RegisterView';
import ResetPasswordView from '../views/user/ResetPasswordView';
import SecurityView from '../views/user/SecurityView';
import AddBookView from './../views/AddBookView';
import CartView from './../views/CartView';
import CommercialAddCategoryView from './../views/commercial/CommercialAddCategoryView';
import CommercialCategoriesView from './../views/commercial/CommercialCategoriesView';
import CommercialCategoryView from './../views/commercial/CommercialCategoryView';
import CommercialHomeView from './../views/commercial/CommercialHomeView';
import CommercialMessagesView from './../views/commercial/CommercialMessagesView';
import CommercialProductsView from './../views/commercial/CommercialProductsView';
import CommercialProductView from './../views/commercial/CommercialProductView';
import CommercialTagAddView from './../views/commercial/CommercialTagAddView';
import CommercialTagsView from './../views/commercial/CommercialTagsView';
import CommercialTagUpdateView from './../views/commercial/CommercialTagUpdateView';
import CommercialUpdateCategoryView from './../views/commercial/CommercialUpdateCategoryView';
import CommercialUsersView from './../views/commercial/CommercialUsersView';
import ContactView from './../views/ContactView';
import ListView from './../views/ListView';
import DetailProductView from './../views/product/DetailProductView';
import ListSearchView from './../views/product/ListSearchView';
import testView from './../views/test';
import EditPasswordView from './../views/user/EditPasswordView';
import EditProfileView from './../views/user/EditProfileView';
import EmailConfirmView from './../views/user/EmailConfirmView';
import ForgottenPasswordView from './../views/user/ForgottenPasswordView';

/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
    return (
        <Switch history={customHistory}>
            <Route exact path={URL.URL_HOME} component={HomeView} />
            <PrivateRoute
                path={URL.URL_ADMIN_HOME}
                component={AdminHomeView}
                roles={[ROLE_ADMIN]}
            />
            <Route path={URL.URL_ADV_SEARCH} component={AdvancedSearchView} />
            <Route path={URL.URL_LOGIN} component={LoginView} />
            <Route path={URL.URL_LIST} component={ListView} />
            <Route path={URL.URL_REGISTER} component={RegisterView} />
            <Route path={URL.URL_EMAIL_CONFIRM} component={EmailConfirmView} />
            <Route path={URL.URL_ADD_BOOK} component={AddBookView} />
            <Route path={URL.URL_PRODUCT_LIST_SEARCH} component={ListSearchView} />
            <Route path={URL.URL_PRODUCT_LIST_TAG} component={ListProductsTagView} />
            <Route path={URL.URL_PRODUCT_DETAIL} component={DetailProductView} />
            <Route path={URL.URL_FORGOTTEN_PASSWORD} component={ForgottenPasswordView} />
            <Route
                path={URL.URL_PRODUCT_LIST_CATEGORY}
                component={ListProductsCategoriesView}
            />
            <Route path={URL.URL_PASSWORD_RESET} component={ResetPasswordView} />
            <Route path={URL.URL_TEST} component={testView} />
            <Route path={URL.URL_CART} component={CartView} />
            <Route path={URL.URL_CONTACT} component={ContactView} />
            <PrivateRoute
                exact
                path={URL.URL_COMMERCIAL_CATEGORY_ADD}
                component={CommercialAddCategoryView}
                roles={[ROLE_COMMERCIAL]}
            />
            <PrivateRoute
                exact
                path={URL.URL_COMMERCIAL_CATEGORY_UPDATE}
                component={CommercialUpdateCategoryView}
                roles={[ROLE_COMMERCIAL]}
            />
            <PrivateRoute
                exact
                path={URL.URL_COMMERCIAL_CATEGORIES}
                component={CommercialCategoriesView}
                roles={[ROLE_COMMERCIAL]}
            />
            <PrivateRoute
                path={URL.URL_COMMERCIAL_CATEGORY}
                component={CommercialCategoryView}
                roles={[ROLE_COMMERCIAL]}
            />
            <PrivateRoute
                exact
                path={URL.URL_COMMERCIAL_HOME}
                component={CommercialHomeView}
                roles={[ROLE_COMMERCIAL]}
            />
            <PrivateRoute
                exact
                path={URL.URL_COMMERCIAL_MESSAGES}
                component={CommercialMessagesView}
                roles={[ROLE_COMMERCIAL]}
            />
            <PrivateRoute
                exact
                path={URL.URL_COMMERCIAL_PRODUCTS}
                component={CommercialProductsView}
                roles={[ROLE_COMMERCIAL]}
            />
            <PrivateRoute
                path={URL.URL_COMMERCIAL_PRODUCT}
                component={CommercialProductView}
                roles={[ROLE_COMMERCIAL]}
            />
            <PrivateRoute
                exact
                path={URL.URL_COMMERCIAL_TAGS}
                component={CommercialTagsView}
                roles={[ROLE_COMMERCIAL]}
            />
            <PrivateRoute
                exact
                path={URL.URL_COMMERCIAL_TAG_ADD}
                component={CommercialTagAddView}
                roles={[ROLE_COMMERCIAL]}
            />
            <PrivateRoute
                exact
                path={URL.URL_COMMERCIAL_TAG_UPDATE}
                component={CommercialTagUpdateView}
                roles={[ROLE_COMMERCIAL]}
            />
            <PrivateRoute
                exact
                path={URL.URL_COMMERCIAL_USERS}
                component={CommercialUsersView}
                roles={[ROLE_COMMERCIAL]}
            />
            <PrivateRoute
                path={URL.URL_SECURITY}
                component={SecurityView}
                roles={[ROLE_USER]}
            />
            <PrivateRoute
                path={URL.URL_ADDRESS_UPDATE}
                component={AddressUpdateView}
                roles={[ROLE_USER]}
            />
            <PrivateRoute
                path={URL.URL_ADDRESS_ADD}
                component={AddressAddView}
                roles={[ROLE_USER]}
            />
            <PrivateRoute
                path={URL.URL_ADDRESS_DEL}
                component={AddressDeleteView}
                roles={[ROLE_USER]}
            />
            <PrivateRoute
                path={URL.URL_ADDRESSES}
                component={AddressesView}
                roles={[ROLE_USER]}
            />
            <PrivateRoute
                path={URL.URL_EDIT_PASSWORD}
                component={EditPasswordView}
                roles={[ROLE_USER]}
            />
            <PrivateRoute
                path={URL.URL_EDIT_PROFILE}
                component={EditProfileView}
                roles={[ROLE_USER]}
            />
            <PrivateRoute
                path={URL.URL_DELETE_PROFILE}
                component={DeleteProfileView}
                roles={[ROLE_USER]}
            />
            <Route path={URL.URL_MANAGE_ACCOUNT} component={ManageAccountView} />
        </Switch>
    );
};

export default Routes;
