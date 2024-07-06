function painting(yellowPaint) {

    let redPaint = yellowPaint / 4;
    let whitePaint = yellowPaint * 2;
    let totalPaint = yellowPaint + redPaint + whitePaint;

    console.log(`Red: ${redPaint}`);
    console.log(`Yellow: ${yellowPaint}`);
    console.log(`White: ${whitePaint}`);
    console.log(`Total: ${totalPaint}`);
}

painting(10);
painting(17);
painting(42);