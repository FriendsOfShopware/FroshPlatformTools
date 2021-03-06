const { Application } = Shopware;

import FroshToolsService from './api/frosh-tools';
import './overrides/sw-data-grid-inline-edit';
import './overrides/sw-version';

Application.addServiceProvider('FroshToolsService', (container) => {
    const initContainer = Application.getContainer('init');

    return new FroshToolsService(initContainer.httpClient, container.loginService);
});

import './module/frosh-tools';
