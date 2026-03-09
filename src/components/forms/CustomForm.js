import { Strings } from "@/contexts/LanguageContext";
import SpinnerLoader from "@/components/ui/Loader/SpinnerLoader";
import { useState } from "react";
import { Form } from "./Form";
import { Col, FormGroup } from "reactstrap";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { Select } from "./Select";

const CustomForm = ({
    ref,
    mediumView,
    newColumnView,
    lang,
    customerFormFields,
    form,
    formId,
    status,
    setRefreshHeader,
    formHeaderTitle,
    contactsForm,
    customer,
    customerId,
    typeOfId,
    sectionId,
    page,
    title,
    modal,
    groupID,
    paymentTotal,
    remainingTotal,
    fieldLang,
    productCategoryId,
    postCategoryId,
    productId,
    selectedOption,
    section
}) => {

    const initialState = {
        id: "",
        data: data || [],
        subfields: [],
        image: "",
        type: type || "customer",
        title: title,
        status: status,
        form: form,
        customer: customer,
        modal: modal,
        refresh: false,
        updated: false,
        error: false,
        uploadFormId:
            status == "edit" ? formId : form,
        uploadGroupID: status == "edit" ? groupID : "",
        formsWithGroupList: [],
        selectdGroupFields: [],
        selectdGroupFieldsIDs: [],
        withPrint: false,
        printData: [],
        currencyList: [],
        progressUpload: [],
        index: 0,
        direction: null,
        deleteMultiImage: [],
        paymentTotal: paymentTotal,
        remainingTotal: remainingTotal,
        errorOrderInventory: 0,
        errorOrderInventoryData: [],
        canSave: 1,
        canSaveFields: [],
        fieldLang: fieldLang != undefined ? fieldLang : "",
        multiLang:
            fieldType != undefined &&
                fieldType == "multiLanguage"
                ? 1
                : 0,
        //state product
        allLang: [],
        dataLang: [],
        titles: [],
        generalTitle: "",
        generalActive: status == "add" ? 1 : "",
        ids: id,
        forms: [],
        formChildId: "",
        taxes: "",
        proType: 0,
        productType: "",
        servicesType: "",
        classNameHide: "hide",
        productCategoryId: productCategoryId,
        postCategoryId: postCategoryId,
        productId: productId,
        pricePeriod: "",
        price: "",
        inventory: "",
        reqErrorProduct: [],
        reqErrorPost: [],
        isExistsInProposal: 0,
        isNotItem: 0,
        displayTaxes: 1,
        allTaxes: [],
        paymentMethod: 0,
        addPaymentMethod: ["1"],
        deletePaymentMethod: ["1"],
        qtyOf: [1],
        qtyTo: [],
        qtyPrice: [],
        qtyError: [],
        defaultPriceQty: "",
        contractTemplateList: [],
        contractId: "",
        contractInfo: [],
        contractSelectedAction: "",
        requiredContractId: 0,
        newFieldsList_value: [],
        requiredContractFields: [],
        defaultCurrencyCode: localStorage.getItem("CURRENCY_CODE"),
        loadingData: 0,
        newFieldType: 0,
        newFieldOption: [],
        contentList: [],
        errorEmptyNewField: 0,
        fieldsMultiLang: [],
        fieldsMultiLangLabel: [],
        allSuppliers: [],
        allProAttr: [],
        selectedProAttr: [],
        selectedOption: selectedOption
            ? selectedOption
            : [],
        supplierCost: [],
        allBanks: [],
        errorBank: 0,
        bankId:
            supplierPaymentPlan != undefined &&
                supplierPaymentPlan == true
                ? bankId
                : "",
        reqFields: [],
        filesData: [],
        contractErrorFlag: 0,
        openHeader: false,
        isTransLoading: false,
        allLangForTranslate: [],
        toLangArray: [],
        allLangsId: [],
        allLangTitles: [],
        isHoverLangCollapse: "",
        isOpenFormTitleCollapse: false,
        isTransLoadingSubField: [],
        openHeaderSubField: [],
        allLangSubFieldTitles: [],
        isOpenSubFieldCollapse: [],
        isHoverLangCollapseSub: [],
        isOpenFormTitleCollapseSub: false,
        titleCollapseError: false,
        titleCount: 0,
        fieldsTitleCollapseError: [false],
        fieldsTitleCount: [0],
        hiddenData: [],
        automationFields: [],
        orginalHiddenData: [],
        orginalRequierData: [],
        showHideFields: [],
        submitError: "",
        allCountriesList: [],
        allCitiesList: [],
        hideSaveBtn: 0,
        haveDiscount: "",
        productAttributes: "",
        subFormList: [],
        selectedSubForm: "",
        startSave: 0,
        selectedUser: selectedOption ? selectedOption : {},
        supplierPipeline: localStorage.getItem("supplierPipeline"),
        useMultiStore: 0,
        viewStorePriceList: false,
        viewProductStoreLocations: false,
        selectedStored: [],
        multiValueCustomerType: [],
        saveStoreData: 0,
        selectedStoredError: 0,
        selectedLoction: [],
        saveLoctionData: 0,
        selectedLoctionError: 0,
        subfieldsList: [],
        storeList: [],
        customerType: [],
        storeId: "",
        customerTypeId: 0,
        multiValueStoreSelect: [],
        postForms: [],
        resizeFileList: [],
        correctedItemCode: "",
        withCharacters: "",
        serialLength: "",
        minStock: "",
        eachUnitEqual: "",
        eachUnitEqualValue: "",
        skipInventory: "",
        sort: "",
        withAttributes: '',
        vehicleCustomers: [],
        loadingVehicleCustomers: 0,
        selectedVehicleCustomersOption: [],
        itemsProfitList: [],
        textEditorField: [],
        textEditorValue: '',
        viewManageContent: false,
        postFormId: ""
    }
    const [customFormState, setCustomFormState] = useState(initialState);
    const rightBarNodeRef = useRef(null);

    return (
        <React.Fragment>
            <div style={customFormState.page == "customerInfo"
                && customFormState.pageBuilderView != 1
                ? { maxHeight: "512px", overflowY: "scroll" }
                : {}}
                className={
                    customFormState.mediumView == 1
                        && customFormState.isDrawer != 1
                        ? " right-modal-medium-view-v2 "
                        : customFormState.section == "Payment"
                            || customFormState.formView == 1
                            ? "right-modal-enabled"
                            : customFormState.page != "customerInfo"
                                && customFormState.page != "addDirectPayment"
                                && customFormState.mainProductPage != 1
                                && customFormState.page != "post"
                                && customFormState.discountForm != 1
                                && customFormState.isDrawer != 1
                                ? "right-Modal"
                                : ""
                }
                ref={(node) => (rightBarNodeRef = node)}
            >

                {page != "addDirectPayment" && section != "Payment"
                    && formView != 1 && page != "customerInfo"
                    && mainProductPage != 1 && page != "post"
                    && discountForm != 1 && (
                        <div className="form-side-header">
                            <Link
                                to="#"
                                className="right-bar-toggle float-right"
                                onClick={this.handleClose}
                            >
                                <i className="dripicons-cross noti-icon"></i>
                            </Link>

                            <h5 className="m-0 text-white">
                                {formHeaderTitle}
                            </h5>

                        </div>
                    )}

                {customFormState.loadingData === 0 && (
                    <Col
                        md={mediumView == 1
                            ? 5 : formView != 1
                                || section != "Payment"
                                || page == "addDirectPayment"
                                ? 7 : dueAmountPayment == 1
                                    ? 12 : createDirectProposal == 1
                                        ? 7 : 12}
                        style={{ margin: "auto" }}
                        className={formView == 1 ? " text-center" : " "}
                    >
                        <SpinnerLoader />
                    </Col>
                )}

                {customFormState.loadingData !== 0 && (
                    <div className={
                        (taskDetailsCustomStyle == 1
                            ? "task-details-customForm-padding"
                            : "") +
                        (page != "addDirectPayment"
                            ? newColumnView == 1
                                ? "form-column-view "
                                : " form-side-body " : "  ") +
                        " form-option-padding-right-15 "}
                        style={
                            page == "ProductCategory"
                                ? { padding: "13px" }
                                : mainProductPage == 1
                                    || discountForm == 1
                                    || page == "post"
                                    || formView == 1
                                    || subTaskFormView == 1
                                    ? { padding: "0px" } : {}}>
                        <Form {...form}>
                            <form onSubmit={form?.handleSubmit(OnSubmit)}>
                                <div className={(mediumView == 1
                                    ? " row " : " ") +
                                    (page == "ProductCategory"
                                        || page == "Product"
                                        || page == "post"
                                        ? " p-2 mb-3" : "")}>
                                    {(page == "ProductCategory"
                                        || page == "Product"
                                        || page == "post") && (
                                            <h4 className="mt-0 font-16">{Strings["General"]}</h4>
                                        )}
                                    {page == "ProductCategory" &&
                                        this.returnProductCategory()}
                                    {page == "addDirectPayment" && (
                                        <Col md={12}>
                                            <div className={
                                                customFormState.errorSelectCustomer == 1
                                                    ? "error-select-input custom-form-mb"
                                                    : "custom-form-mb"}                                            >
                                                <label className={
                                                    customFormState.errorSelectCustomer == 1
                                                        ? "error-label"
                                                        : ""}                                                >
                                                    {customFormState.supplierPipeline == 1
                                                        ? Strings.Supplier
                                                        : Strings.Customer}{" "}
                                                    *{" "}
                                                    {customFormState.loadingCustomer == 0 && (
                                                        <i className="mdi mdi-spin mdi-loading"></i>
                                                    )}
                                                </label>
                                                <Select
                                                    control={form.control}
                                                    onChange={this.handleChangeCustomer}
                                                    options={customers}
                                                    placeholder={
                                                        customFormState.supplierPipeline == 1
                                                            ? Strings["Choose Supplier"]
                                                            : Strings["Choose Customer"]}
                                                    value={customFormState.selectedOption}
                                                    required
                                                    onInputChange={getCustomers_handle}
                                                    disabled={Object.keys(customFormState.selectedOption).length > 0
                                                        ? true : false
                                                    }
                                                    filterOption={() => {
                                                        return true;
                                                    }}
                                                />
                                            </div>
                                        </Col>
                                    )}
                                    {pageFrom == "taskDirectCustomForm"
                                        && addNewCustomForm_formType == "vehicle" && (
                                            <Col md={12}>
                                                <div className={"custom-form-mb"}>
                                                    <label>
                                                        {Strings.Customer} *{" "}
                                                        {customFormState.loadingVehicleCustomers == 1 && (
                                                            <i className="mdi mdi-spin mdi-loading"></i>
                                                        )}
                                                    </label>
                                                    <Select
                                                        control={form.control}
                                                        onChange={this.handleChangeVehicleCustomers}
                                                        options={customFormState.vehicleCustomers}
                                                        placeholder={Strings["Choose Customer"]}
                                                        value={customFormState.selectedVehicleCustomersOption}
                                                        required
                                                        onInputChange={this.getVehicleCustomers}
                                                        filterOption={() => {
                                                            return true;
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                        )}
                                    <Col md={12}>
                                        {page == "Product" && fromItemReport == 1
                                            && (<label>{Strings["Status"]}</label>)}
                                        {page == "Product" && fromItemReport == 1 && (
                                            <Col md={12}>
                                                <FormGroup
                                                    name="generalActive"
                                                    className="checkbox-ar-margin"
                                                >
                                                    <Checkbox
                                                        control={form.control}
                                                        customInput
                                                        label={Strings.Active}
                                                        value="1"
                                                        onChange={this.handleInputChangeGeneral}
                                                        checked={customFormState.generalActive == 1
                                                            ? true : false}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        )}
                                    </Col>
                                    {page == "Product" && this.returnProduct()}
                                    {page == "post" && this.returnPost()}
                                    {customFormState.data.map((i, input) => this.setupForm(i))}
                                    {(page == "ProductCategory"
                                        || page == "Product") && (
                                            <Col md={12}>
                                                <div className="border border-light p-2 mb-3">
                                                    <h4 className="mt-0 font-16">{Strings["Title"]}</h4>
                                                    {customFormState.allLang.map((data, input) =>
                                                        this.setupTitleMultiLang(data, input)
                                                    )}
                                                </div>
                                            </Col>
                                        )}
                                    <Col md={12}>
                                        {customFormState.fieldsMultiLang.map((i, input) =>
                                            this.fieldMultiLang(i, input)
                                        )}
                                    </Col>
                                    {customFormState.forms.length > 0
                                        && (page == "ProductCategory"
                                            || page == "Product") &&
                                        customFormState.proType != 1 && (
                                            <Col md={12}>
                                                <Input
                                                    control={form.control}
                                                    type="select"
                                                    name="formChildId"
                                                    label={Strings.Forms}
                                                    onChange={this.handleInputChangeGeneral}>
                                                    <option
                                                        style={{
                                                            display: "none",
                                                        }}
                                                        value=""
                                                        defaultValue>
                                                        {Strings["Select Form"]}
                                                    </option>
                                                    {customFormState.forms.map((data, index) =>
                                                        this.setDataForms(data, index)
                                                    )}
                                                </Input>
                                            </Col>
                                        )}
                                    {page == "post" &&
                                        customFormState.postForms.length > 0 &&
                                        customFormState.postLastLevel != 1 && (
                                            <Col md={12}>
                                                <Select
                                                    control={form.control}
                                                    type="select"
                                                    disabled={status == "edit" &&
                                                        customFormState.postFormId > 0
                                                        ? true
                                                        : false
                                                    }
                                                    required
                                                    name="postFormId"
                                                    label={Strings.Forms + " *"}
                                                    onChange={this.handleInputChangeGeneral}>
                                                    <option
                                                        style={{
                                                            display: "none",
                                                        }}
                                                        value=""
                                                        defaultValue>
                                                        {Strings["Select Form"]}
                                                    </option>
                                                    {customFormState.postForms?.map((data, index) =>
                                                        this.setDataForms(data, index)
                                                    )}
                                                </Select>
                                            </Col>
                                        )}
                                    {((page == "Product" &&
                                        customFormState.subFormList.length > 0
                                        && mainProductPage)
                                        || (page == "post"
                                            && customFormState.subFormList.length > 0))
                                        && (<Col md={12}>
                                            <Input
                                                type="select"
                                                name="selectedSubForm"
                                                label={Strings["Sub Forms"]}
                                                value={customFormState.selectedSubForm}
                                                onChange={this.handleInputChangeGeneral}>
                                                <option
                                                    style={{
                                                        display: "none",
                                                    }}
                                                    value=""
                                                    defaultValue>
                                                    {Strings["Select Sub Form"]}
                                                </option>
                                            </Input>
                                        </Col>
                                        )}
                                    {customFormState.subFormList.map((data, index) =>
                                        this.setDataForms(data, index))}
                                    {customFormState.errorOrderInventory == 1
                                        && (<Row md={12}>
                                            <Col md={12} className="clear-col-padding ">
                                                <p className="errorInventory">
                                                    <span className="errorInventory error-label">
                                                        {Strings["The input quantity of some items is greater than the quantity found"]}
                                                    </span>
                                                </p>
                                            </Col>
                                        </Row>
                                        )}
                                    {customFormState.errorOrderInventory == 1
                                        && (<Row>
                                            <Col md={12} xs={12} className="col-md-push-4">
                                                <div className="table-responsive">
                                                    <table className="table mt-4 table-centered">
                                                        <thead>
                                                            <tr>
                                                                <th style={{ width: "20%" }}>{Strings.Item}</th>
                                                                <th style={{ width: "20%" }}>{Strings.Qty}</th>
                                                                <th style={{ width: "20%" }}>
                                                                    {Strings.Inventory}
                                                                </th>
                                                                <th style={{ width: "20%" }}>
                                                                    {Strings["Quantity Of Sales"]}
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>{errorOrderInventoryData}</tbody>
                                                    </table>
                                                </div>
                                            </Col>
                                        </Row>
                                        )}
                                    {orderWithContract == 1 &&
                                        useContract == 1
                                        && (<Col
                                            md={12}
                                            xs={12}
                                            className={customFormState.contractErrorFlag == 1
                                                ? "order-form-contract-requied " : " "}>
                                            <Input
                                                label={Strings["Contract Templates"]}
                                                type="select"
                                                required={customFormState.requiredContractId == 1
                                                    ? true : false}
                                                name="contractId"
                                                value={customFormState.contractId}
                                                onChange={(event) => this.handleContractChange(event)}>
                                                <option
                                                    style={{
                                                        display: "none",
                                                    }}
                                                    value=""
                                                    defaultValue>
                                                    {Strings["Select Contract Template"]}
                                                </option>
                                                {customFormState.contractTemplateList.map((data, input) =>
                                                    this.setUpSelectFields(data, "contract", input)
                                                )}
                                            </Input>
                                            {customFormState.contractErrorFlag == 1 && (
                                                <div className="invalid-feedback d-block mb-1">
                                                    {Strings["This field is required"]}
                                                </div>
                                            )}
                                            {orderWithContract == 1 && (
                                                // <Row>
                                                <Col className="mb-2" md={12}>
                                                    <label className={
                                                        customFormState.emptyFileList == 1
                                                            ? "error-label" : ""}>
                                                        {Strings["Order Files"]}
                                                    </label>
                                                    <span
                                                        className={
                                                            customFormState.emptyFileList == 1
                                                                ? "fileInput-span col-md-12 error-input"
                                                                : "fileInput-span col-md-12"}>
                                                        <i className="mdi mdi-progress-upload"></i>{" "}
                                                        <span className="pointer-cursor task-action-form-fields-font">
                                                            {Strings.Upload}
                                                        </span>
                                                        <input
                                                            type="file"
                                                            className="fileInput-width fileInput-opacity"
                                                            onChange={(e) =>
                                                                this.handleOrderFileChange("contractFiles", e)
                                                            }
                                                            multiple={true}
                                                            name="contractFiles"
                                                        ></input>
                                                    </span>
                                                    <div
                                                        className={
                                                            customFormState.emptyFileList == 1
                                                                ? "invalid-feedback d-block"
                                                                : "d-none"}>
                                                        {Strings["This field is required"]}
                                                    </div>

                                                    {customFormState.filesData.length > 0 && (
                                                        <div className="mt-3 pl-2 mb-3">
                                                            <Col md={12}>
                                                                {customFormState.filesData.map((data, input) =>
                                                                    this.setUpFileDataView(data, input)
                                                                )}
                                                            </Col>
                                                        </div>
                                                    )}
                                                </Col>)}
                                        </Col>)}
                                </div>
                            </form>
                        </Form>
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default CustomForm;