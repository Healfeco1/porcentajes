<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- css bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Porcentajes</title>
</head>

<body>
    <form method="POST">
        <div class="form-row m-2">
            <div class="col-md-4">
                <label for="validationServer01">Total</label>
                <input name="total" type="number" placeholder="100%" required>
            </div>
        </div>
            <button class="btn btn-primary btn-sm ml-5" type="submit">Submit form</button>
    </form>
    <?php
        
        $total=$_POST['total'];
        if($total != null){
            porcentaje($total);
        }

        function porcentaje($val)
        {
            $diez = $val*.10;
            $veinte = $val*.20;
            $treinta = $val*.30;
            $cuarenta = $val*.40;
            $cincuenta = $val*.50;
            $sesenta = $val*.60;
            $setenta = $val*.70;
            $ochenta = $val*.80;
            $noventa = $val*.90;
            $cientodiez = $val*1.10;
            echo 
            "10 % de $val : " . $diez. "<br>" .
            "20 % de $val : " . $veinte. "<br>" .
            "30 % de $val : " . $treinta. "<br>" .
            "40 % de $val : " . $cuarenta. "<br>" .
            "50 % de $val : " . $cincuenta. "<br>" .
            "55 % de $val : " . $val*.55. "<br>" .
            "60 % de $val : " . $sesenta. "<br>" .
            "65 % de $val : " . $val*.65. "<br>" .
            "70 % de $val : " . $setenta. "<br>" .
            "75 % de $val : " . $val*.75. "<br>" .
            "80 % de $val : " . $ochenta. "<br>" .
            "85 % de $val : " . $val*.85. "<br>" .
            "90 % de $val : " . $noventa. "<br>" .
            "95 % de $val : " . $val*.95. "<br>" .
            "110 % de $val : " . $cientodiez;
            // return $valor_devuelto;
        }
    ?>
</body>

</html>