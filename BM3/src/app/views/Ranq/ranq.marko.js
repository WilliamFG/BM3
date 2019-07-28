// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/bm3$1.0.0/src/app/views/Ranq/ranq.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=\"pt-br\"><head><title>Aplicativo health track fiap</title><meta charset=\"utf-8\"> </head><body>");

  component_globals_tag({}, out);

  out.w("<table class=\"table table-striped\"><caption> Ranqueamento </caption><thead><tr><th>Tag</th><th>Descrição</th><th>Referência</th><th>Pontuação</th></tr> </thead><tbody>");

  var for__14 = 0;

  marko_forEach(data.ranquea, function(ranq) {
    var keyscope__15 = "[" + ((for__14++) + "]");

    out.w("<tr><td> " +
      marko_escapeXml(ranq.TAG) +
      "</td> <td> " +
      marko_escapeXml(ranq.Descricao) +
      "</td> <td> " +
      marko_escapeXml(ranq.Referencia) +
      "</td> <td> " +
      marko_escapeXml(ranq.Pontuacao) +
      "</td> </tr>");
  });

  out.w("</tbody></table> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "21");

  out.w("</body></html> ");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/bm3$1.0.0/src/app/views/Ranq/ranq.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
