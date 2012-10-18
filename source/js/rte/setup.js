/*************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2012 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

window.CUI = window.CUI || { };
CUI.rte = {};
CUI.rte.commands = {};
CUI.rte.plugins = {};
CUI.rte.adapter = {};
CUI.rte.ui = {};
CUI.rte.ui.ext = {};
CUI.rte.ui.cui = {};
CUI.rte.ui.stub = {};

(function() {

    // determine which implementations to use
    CUI.rte._adapter = ((typeof(CQ) !== "undefined") && CQ.Ext ? "ext" : "jquery");
    // CUI.rte._toolkit = ((typeof(CQ) !== "undefined") && CQ.Ext ? "ext" : "cui");
    CUI.rte._toolkit = ((typeof(CQ) !== "undefined") && CQ.Ext ? "ext" : "stub");

})();
