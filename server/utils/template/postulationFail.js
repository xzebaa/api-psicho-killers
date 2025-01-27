const postulationFailTemplate = ({ name }) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  style="width:100%;font-family:Poppins, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"
>
  <head>
    <link
      href="https://fonts.googleapis.com/css?family=Poppins"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:100"
      rel="stylesheet"
    />

    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>New email template 2021-02-21</title>
    <!--[if (mso 16)
      ]><style type="text/css">
        a {
          text-decoration: none;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9
      ]><xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml><!
    [endif]-->
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }

      .titleLanding {
        line-height: 48px;
        font-size: 40px;
        font-weight: 600;
        margin: 0;
        mso-line-height-rule: exactly;
        font-family: Poppins, sans-serif;
        color: #212529;
        font-style: normal;
        padding-bottom: 30px;
      }

      .dudeEmail {
        margin: 0;
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        mso-line-height-rule: exactly;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #212529;
      }

      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li,
        a {
          font-size: 16px;
          line-height: 150%;
        }
        h1 {
          font-size: 30px;
          line-height: 120%;
        }
        h2 {
          font-size: 26px;
          line-height: 120%;
        }
        h3 {
          font-size: 20px;
          line-height: 120%;
        }
        h1 a {
          font-size: 30px;
        }
        h2 a {
          font-size: 26px;
        }
        h3 a {
          font-size: 20px;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 16px !important;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 16px !important;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }
        *[class="gmail-fix"] {
          display: none !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-button-border {
          display: block !important;
        }
        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important;
        }
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-m-p0 {
          padding: 0px !important;
        }
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p0t {
          padding-top: 0px !important;
        }
        .es-m-p0b {
          padding-bottom: 0 !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        table.es-social {
          display: inline-block !important;
        }
        table.es-social td {
          display: inline-block !important;
        }
        a.es-button,
        button.es-button {
          font-size: 20px !important;
          display: block !important;
          border-width: 10px 20px 10px 20px !important;
        }

        .titleLanding {
          line-height: 48px;
          font-size: 35px;
          font-weight: 600;
          margin: 0;
          padding-bottom: 28;
          mso-line-height-rule: exactly;
          font-family: Poppins, sans-serif;
          color: #212529;
          font-style: normal;
        }

        .dudeEmail {
          margin: 0;
          -webkit-text-size-adjust: none;
          -ms-text-size-adjust: none;
          mso-line-height-rule: exactly;
          font-family: Poppins;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          color: #212529;
        }
      }
    </style>
  </head>
  <body
    style="width:100%;font-family:Poppins;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"
  >
    <div class="es-wrapper-color" style="background-color:#E5E5E5">
      <!--[if gte mso 9
        ]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#555555"></v:fill> </v:background
      ><![endif]-->
      <table
        class="es-wrapper"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"
      >
        <tr style="border-collapse:collapse">
          <td valign="top" style="padding:0;Margin:0">
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"
            >
              <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                  <table
                    class="es-content-body"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                    style="border: 1px solid #D3D3D3;mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F8F8F8;width:600px"
                  >
                    <tr style="border-collapse:collapse">
                      <td
                        style="Margin:0;background-color: transparent"
                        align="left"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding:0;Margin:0"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    align="center"
                                    style="padding:0;Margin:0;font-size:0"
                                  >
                                    <a
                                      target="_blank"
                                      href="https://viewstripo.email/"
                                      style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Poppins, sans-serif;font-size:14px;text-decoration:none;color:#3CA7F1"
                                      ><img
                                        class="adapt-img"
                                        src="https://res.cloudinary.com/dorrola/image/upload/v1629775211/Frame_4_r7gvvl.png"
                                        alt
                                        width="600"
                                        height="247"
                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                    /></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="border-collapse:collapse">
                      <td
                        style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:52px;padding-right:52px;background-color:#FFFFFF"
                        bgcolor="#ffcc99"
                        align="left"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding:0;Margin:0;width:560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td>
                                    <div>
                                      <h2 class="titleLanding">
                                        <span
                                          ><strong>${name}, </strong> has llegado
                                          muy lejos...</span
                                        ><br />
                                      </h2>
                                    </div>
                                  </td>
                                </tr>
                                <tr style="border-collapse:collapse">
                                  <td
                                    style="padding:0;Margin:0;padding-left:0px;padding-top:1px"
                                  >
                                    <p
                                      style="font-family: Poppins;font-style: normal;font-weight: normal;font-size: 16px;line-height: 24px;color: #212529;mso-line-height-rule:exactly;"
                                    >
                                      Lamentamos anunciarte que no continuas en
                                      el proceso de selección para la
                                      postulación Developer Semi - Senior.
                                      <br />
                                      <br />
                                      Adjunto encontrarás nuestro feedback que
                                      creemos te puede ser útil para mejorar.
                                      Héchale una mirada y comentanos si tienes
                                      alguna duda o pregunta.

                                      <br />
                                      <br />
                                    </p>
                                    <p>
                                      Un saludo! Nos vemos.<br /><br /><br />

                                      Departamento de Hirings
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <table
              cellpadding="0"
              cellspacing="0"
              class="es-footer"
              align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"
            >
              <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                  <table
                    class="es-footer-body"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#242424;width:600px;height: 120px;"
                  >
                    <tr style="border-collapse:collapse">
                      <td align="left" style="padding:20px;Margin:0">
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              valign="top"
                              align="right"
                              style="padding:0;Margin:0;width:560px"
                            >
                              <p
                                style="font-family: Montserrat;font-style: normal;font-weight: 900;font-size: 16px;line-height: 20px;color: #FAFAFA;margin-right: 31px;"
                              >
                                #iampeanut<br />
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"
            >
              <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                  <table
                    class="es-content-body"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tr style="border-collapse:collapse">
                      <td
                        align="left"
                        style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding:0;Margin:0;width:560px"
                            ></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>

`;
};

module.exports = { postulationFailTemplate };
