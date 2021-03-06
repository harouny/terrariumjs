var Point = Class.extend({
   init: function (x, y)
    {
        this.X = x;
        this.Y = y;
    },

    DistanceWith: function(x, y)
    {
        return MathUtils.distance(this.X, this.Y, x, y);
    },

    Magnitude: function()
    {
        var absX = (this.X < 0 ? -this.X : this.X);
        var absY = (this.Y < 0 ? -this.Y : this.Y);

        if (absX < absY)
            return absX + absY - absX/2;
        
        return absX + absY - absY/2;
    },

    Substract: function (point)
    {
        return new Point(point.X - this.X, point.Y - this.Y);
    },

    GetUnitVector: function(){
        var magnitude = this.Magnitude();
        return new Point(this.X / magnitude, this.Y / magnitude);
    },
    Add: function(vector)
    {
        return new Point(this.X + vector.X, this.Y + vector.Y);
    },
    Scale: function (scalar)
    {
        return new Point(Math.round(this.X * scalar), Math.round(this.Y * scalar));
    },
    ToAngleInDegrees: function(vector)
    {
        var unitVector = this.GetUnitVector();
        var angle = Math.acos(unitVector.X);
        if (unitVector.Y < 0)
            angle = 6.2831853 - angle;

        // convert radians to degrees
        return (angle/6.283185) * 360;
    },
    EqualsTo: function(point)
    {
        if (point == null)
            return false;
        return (this.X == point.X && this.Y == point.Y);
    },
    ToString: function()
    {
        return "(" + this.X + ", " + this.Y + ")";
    },
    DistanceWith: function(point)
    {
      var xs = 0;
      var ys = 0;
     
      xs = point.X - this.X;
      xs = xs * xs;
     
      ys = point.Y - this.Y;
      ys = ys * ys;
     
      return Math.sqrt(xs + ys);
    },
    ///   Rotates a vector about the origin by an angle given in Radians
    ///   radians.
    ///   A point (x,y) can be rotated around the origin (0,0) by running it through the following equations 
    ///   to get the new point (x',y'):
    ///   x' = cos(theta)*x - sin(theta)*y 
    ///   y' = sin(theta)*x + cos(theta)*y
    ///   where theta is the angle by which to rotate the point.
    Rotate: function(radians)
    {
        var newVector = new Point(Math.cos(radians)*this.X - Math.sin(radians)*this.Y,
                                   Math.sin(radians)*this.X + Math.cos(radians)*this.Y);
        return newVector;
    }

});
