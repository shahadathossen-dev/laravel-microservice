const Ziggy = {"url":"http:\/\/localhost:8000","port":8000,"defaults":{},"routes":{"login":{"uri":"login","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.update":{"uri":"reset-password","methods":["POST"]},"verification.notice":{"uri":"email\/verify","methods":["GET","HEAD"]},"verification.verify":{"uri":"email\/verify\/{id}\/{hash}","methods":["GET","HEAD"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"user-profile-information.update":{"uri":"user\/profile-information","methods":["PUT"]},"user-password.update":{"uri":"user\/password","methods":["PUT"]},"password.confirmation":{"uri":"user\/confirmed-password-status","methods":["GET","HEAD"]},"password.confirm":{"uri":"user\/confirm-password","methods":["POST"]},"profile.show":{"uri":"user\/profile","methods":["GET","HEAD"]},"other-browser-sessions.destroy":{"uri":"user\/other-browser-sessions","methods":["DELETE"]},"current-user-photo.destroy":{"uri":"user\/profile-photo","methods":["DELETE"]},"current-user.destroy":{"uri":"user","methods":["DELETE"]},"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"products.index":{"uri":"products","methods":["GET","HEAD"]},"products.store":{"uri":"products","methods":["POST"]},"products.show":{"uri":"products\/{product}","methods":["GET","HEAD"]},"products.update":{"uri":"products\/{product}","methods":["PUT","PATCH"],"bindings":{"product":"id"}},"products.destroy":{"uri":"products\/{product}","methods":["DELETE"],"bindings":{"product":"id"}},"rest.products.restore":{"uri":"api\/v1\/products\/{id}\/restore","methods":["PUT"]},"rest.products.force-delete":{"uri":"api\/v1\/products\/{id}\/deleted","methods":["GET","HEAD"]},"delegates.excel":{"uri":"api\/v1\/delegates\/excel","methods":["GET","HEAD"]},"delegates.pdf":{"uri":"api\/v1\/delegates\/pdf","methods":["GET","HEAD"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"roles.index":{"uri":"roles","methods":["GET","HEAD"]},"roles.create":{"uri":"roles\/create","methods":["GET","HEAD"]},"roles.store":{"uri":"roles","methods":["POST"]},"roles.show":{"uri":"roles\/{role}","methods":["GET","HEAD"],"bindings":{"role":"id"}},"roles.edit":{"uri":"roles\/{role}\/edit","methods":["GET","HEAD"],"bindings":{"role":"id"}},"roles.update":{"uri":"roles\/{role}","methods":["PUT","PATCH"],"bindings":{"role":"id"}},"roles.destroy":{"uri":"roles\/{role}","methods":["DELETE"],"bindings":{"role":"id"}},"users.index":{"uri":"users","methods":["GET","HEAD"]},"users.create":{"uri":"users\/create","methods":["GET","HEAD"]},"users.store":{"uri":"users","methods":["POST"]},"users.show":{"uri":"users\/{user}","methods":["GET","HEAD"],"bindings":{"user":"id"}},"users.edit":{"uri":"users\/{user}\/edit","methods":["GET","HEAD"],"bindings":{"user":"id"}},"users.update":{"uri":"users\/{user}","methods":["PUT","PATCH"],"bindings":{"user":"id"}},"users.destroy":{"uri":"users\/{user}","methods":["DELETE"],"bindings":{"user":"id"}},"products.create":{"uri":"products\/create","methods":["GET","HEAD"]},"products.edit":{"uri":"products\/{product}\/edit","methods":["GET","HEAD"],"bindings":{"product":"id"}},"products.restore":{"uri":"products\/{id}\/restore","methods":["PUT"]},"products.force-delete":{"uri":"products\/{id}\/deleted","methods":["GET","HEAD"]},"delegates.index":{"uri":"delegates","methods":["GET","HEAD"]},"delegates.create":{"uri":"delegates\/create","methods":["GET","HEAD"]},"delegates.store":{"uri":"delegates","methods":["POST"]},"delegates.show":{"uri":"delegates\/{delegate}","methods":["GET","HEAD"],"bindings":{"delegate":"id"}},"delegates.edit":{"uri":"delegates\/{delegate}\/edit","methods":["GET","HEAD"],"bindings":{"delegate":"id"}},"delegates.update":{"uri":"delegates\/{delegate}","methods":["PUT","PATCH"],"bindings":{"delegate":"id"}},"delegates.destroy":{"uri":"delegates\/{delegate}","methods":["DELETE"],"bindings":{"delegate":"id"}},"delegates.update-status":{"uri":"delegates\/{delegate}\/update-status","methods":["POST"],"bindings":{"delegate":"id"}}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };