addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("ので", {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain; charset=UTF-8",
      },
    })
  );
});
